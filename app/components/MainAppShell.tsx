import {
  AppShell,
  Box,
  Divider,
  Group,
} from "@mantine/core";

import { Link, useLocation } from "@remix-run/react";
import { Logo } from "~/components/Logo";

type Props = {
  children: React.ReactNode;
  headerRightSection?: React.ReactNode;
};
export function MainAppShell({ children, headerRightSection }: Props) {

  return (
    <AppShell header={{ height: 60 }} px="md">
      <AppShell.Header>
        <Group align="center" h="100%" px="sm" gap="sm">
          <Box>
            <Link
              to="/map-generator"
              className="logo"
              style={{ textDecoration: "none" }}
            >
              <Logo />
            </Link>
          </Box>
          <Divider orientation="vertical" m="md" />
          <div style={{ flex: 1 }} />
          {headerRightSection}
        </Group>
      </AppShell.Header>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
