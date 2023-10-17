import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";
import { z, string } from "zod";

const Input = styled.input`
  width: 300px;
  height: 40px;
  border: 1px solid black;
  margin: 10px;
`;

const Textarea = styled.textarea`
  width: 300px;
  height: 80px;
  border: 1px solid black;
  margin: 10px;
`;

const Label = styled.label`
  text-align: center;
  height: 20px;
  width: 100px;
  margin: 10px;
  font-size: 16px;
`;

const Button = styled.button`
  width: 300px;
  height: 40px;
  background-color: cadetblue;
  margin: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Error = styled.div`
  color: red;
`;
const schema = z.object({
  name: string().min(2).max(10).nonempty(),
  email: string().email().nonempty(),
  message: string().nonempty(),
});

const ReactHookForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const validData = schema.parse(data);

      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validData),
      });
      if (response.ok) {
        console.log("Dane zostały zapisane pomyślnie!");
      } else {
        console.error("Błąd podczas zapisu danych");
      }
    } catch (validationError) {
      console.error("Błąd walidacji danych:", validationError);

      console.log(errors);
    }
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Wrapper>
          <Label htmlFor="name">Imię:</Label>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <>
                <Input type="text" id="name" {...field} />
                {errors.name && <Error>{errors.name.message}</Error>}
              </>
            )}
          />
        </Wrapper>
        <Wrapper>
          <Label htmlFor="email">Email:</Label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <>
                <Input type="email" id="email" {...field} />
                {errors.email && <Error>{errors.email.message}</Error>}
              </>
            )}
          />
        </Wrapper>

        <Wrapper>
          <Label htmlFor="message">Wiadomość:</Label>
          <Controller
            name="message"
            control={control}
            render={({ field }) => (
              <>
                <Textarea id="message" {...field} />
                {errors.message && <Error>{errors.message.message}</Error>}
              </>
            )}
          />
        </Wrapper>

        <Button type="submit">Zapisz</Button>
      </form>
    </Wrapper>
  );
};

export default ReactHookForm;
