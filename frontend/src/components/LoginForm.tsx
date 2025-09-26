import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, User, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  detectInputType, 
  formatInput, 
  validateInput 
} from "@/utils/validation";

const loginSchema = z.object({
  identifier: z.string()
    .trim()
    .min(1, { message: "Este campo é obrigatório" })
    .refine((value) => validateInput(value), {
      message: "Digite um email, CPF ou CNPJ válido"
    }),
  password: z.string()
    .min(6, { message: "A senha deve ter pelo menos 6 caracteres" })
    .max(100, { message: "A senha deve ter no máximo 100 caracteres" })
});

type LoginFormData = z.infer<typeof loginSchema>;

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    clearErrors
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema)
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const type = detectInputType(value);
    const formattedValue = formatInput(value, type);
    
    setInputValue(formattedValue);
    setValue("identifier", formattedValue);
    
    if (errors.identifier) {
      clearErrors("identifier");
    }
  };

  const getInputPlaceholder = () => {
    const type = detectInputType(inputValue);
    switch (type) {
      case 'cpf':
        return "000.000.000-00";
      case 'cnpj':
        return "00.000.000/0000-00";
      case 'email':
        return "seu@email.com";
      default:
        return "Email, CPF ou CNPJ";
    }
  };

  const onSubmit = async (data: LoginFormData) => {
    try {
      // Simular chamada de API
      console.log("Login data:", data);
      
      // Aqui você faria a integração com seu backend Node.js
      // const response = await fetch('/api/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data)
      // });
      
      // Simular sucesso após 1 segundo
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Navegar para home
      navigate("/home");
    } catch (error) {
      console.error("Erro no login:", error);
    }
  };

  return (
    <div className="login-container flex items-center justify-center p-4">
      <Card className="login-card w-full max-w-md rounded-xl border-0">
        <CardHeader className="space-y-1 text-center pb-8">
          <CardTitle className="text-2xl font-bold text-foreground">
            Bem-vindo de volta
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Entre com suas credenciais para continuar
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="identifier" className="text-sm font-medium">
                Email, CPF ou CNPJ
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="identifier"
                  type="text"
                  placeholder={getInputPlaceholder()}
                  value={inputValue}
                  onChange={handleInputChange}
                  className="pl-10 h-12 border-border focus:border-primary focus:ring-primary"
                  disabled={isSubmitting}
                />
              </div>
              {errors.identifier && (
                <p className="text-sm text-destructive">{errors.identifier.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium">
                Senha
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Digite sua senha"
                  {...register("password")}
                  className="pl-10 pr-10 h-12 border-border focus:border-primary focus:ring-primary"
                  disabled={isSubmitting}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                  disabled={isSubmitting}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-sm text-destructive">{errors.password.message}</p>
              )}
            </div>

            <Button
              type="submit"
              variant="login"
              className="w-full h-12 text-base"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Entrando..." : "Continuar"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};