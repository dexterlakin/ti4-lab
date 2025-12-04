import { type MetaFunction } from "@remix-run/node";
import { Container, Stack, TextInput } from "@mantine/core";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const meta: MetaFunction = () => {
  return [
    { title: "TI4 Lab" },
    { name: "description", content: "TI4 Lab, for drafting and map creation." },
  ];
};

const USER_NAME_KEY = "ti4-lab-user-name";
const USER_UUID_KEY = "ti4-lab-user-uuid";

export default function Index() {
  const [name, setName] = useState("");

  useEffect(() => {
    // Load existing name from localStorage
    const storedName = localStorage.getItem(USER_NAME_KEY);
    if (storedName) {
      setName(storedName);
    }

    // Ensure UUID exists in localStorage
    let storedUuid = localStorage.getItem(USER_UUID_KEY);
    if (!storedUuid) {
      storedUuid = uuidv4();
      localStorage.setItem(USER_UUID_KEY, storedUuid);
    }
  }, []);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;
    setName(newName);
    localStorage.setItem(USER_NAME_KEY, newName);
  };

  return (
    <Container size="sm" py="xl">
      <Stack gap="md">
        <TextInput
          label="Your name:"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter your name"
        />
      </Stack>
    </Container>
  );
}
