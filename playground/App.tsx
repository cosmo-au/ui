import { CurrencyEth } from "phosphor-react";
import React, { ReactElement } from "react";

import {
  Provider,
  View,
  Code,
  Table,
  Text,
  Button,
  Dialog,
  Badge,
  Box,
  Select,
  Stack,
  Avatar,
} from "../src/index";

export function App(): ReactElement {
  return (
    <Provider>
      <View bottom="largest" container top="largest">
        <Stack bottom="larger" direction="row">
          <Stack direction="column">
            <Text as="h1">Scaling Test</Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec Lorem ipsum dolor sit
              amet, consectetur.
            </Text>
            <Text accent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec Lorem ipsum dolor sit
              amet, consectetur.
            </Text>
          </Stack>
        </Stack>
      </View>
      <View bottom="largest" container top="largest">
        <Stack bottom="larger" direction="row">
          <Select
            horizontal="left"
            options={[
              { label: "Test", value: "test" },
              { label: "Test 2", value: "test2" },
              { label: "Test 2", value: "test2" },
              { label: "Test 2", value: "test2" },
              { label: "Test 2", value: "test2" },
              { label: "Test 2", value: "test2" },
              { label: "Test 2", value: "test2" },
              { label: "Test 2", value: "test2" },
              { label: "Test 2", value: "test2" },
              { label: "Test 2", value: "test2" },
              { label: "Test 2", value: "test2" },
              { label: "Test 2", value: "test2" },
              { label: "Test 2", value: "test2" },
            ]}
            trigger={<Button>Test</Button>}
          />
        </Stack>
        <Stack direction="row">
          <Stack direction="column">
            <Stack bottom="medium">
              <Avatar fallback="JD" />
            </Stack>
            <Stack bottom="small">
              <Badge copy copyText="green" icon={<Avatar fallback="JD" />} theme="green">
                A green badge
              </Badge>
            </Stack>
            <Stack bottom="small">
              <Badge theme="red">A red badge</Badge>
            </Stack>
            <Stack bottom="small">
              <Badge theme="orange">An orange badge</Badge>
            </Stack>
            <Stack bottom="small">
              <Badge theme="yellow">A yellow badge</Badge>
            </Stack>
            <Stack bottom="small">
              <Badge theme="purple">A purple badge</Badge>
            </Stack>
            <Stack bottom="small">
              <Badge theme="blue">A blue badge</Badge>
            </Stack>
            <Stack bottom="small">
              <Badge icon={<CurrencyEth />} theme="blue">
                A blue badge
              </Badge>
            </Stack>
            <Stack bottom="small">
              <Badge icon={<CurrencyEth />} iconOnly>
                An icon only badge
              </Badge>
            </Stack>
          </Stack>
        </Stack>
      </View>
      <View bottom="largest" container inverted top="largest">
        <Stack direction="row">
          <Stack direction="column">
            <Stack bottom="small">
              <Badge theme="green">An inverted green badge</Badge>
            </Stack>
            <Stack bottom="small">
              <Badge theme="red">An inverted red badge</Badge>
            </Stack>
            <Stack bottom="small">
              <Badge theme="orange">An inverted orange badge</Badge>
            </Stack>
            <Stack bottom="small">
              <Badge theme="yellow">An inverted yellow badge</Badge>
            </Stack>

            <Stack bottom="small">
              <Badge theme="purple">An inverted purple badge</Badge>
            </Stack>
            <Stack bottom="small">
              <Badge theme="blue">An inverted blue badge</Badge>
            </Stack>
            <Stack bottom="small">
              <Badge icon={<CurrencyEth />} iconOnly>
                An icon only badge
              </Badge>
            </Stack>
          </Stack>
        </Stack>
      </View>
      <View bottom="largest" container inverted top="largest">
        <Dialog trigger={<Button>Test</Button>}>
          <Text as="h3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec
          </Text>
          <Text as="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec
          </Text>
        </Dialog>

        <Badge closable>Test</Badge>
        <Text as="h1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec
        </Text>
        <Text as="h2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec
        </Text>
        <Text as="h3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec
        </Text>
        <Text as="h4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec
        </Text>
        <Text as="h5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec
        </Text>
        <Text as="h6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec
        </Text>
        <Text accent as="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec? Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec! Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Nullam auctor, nisl nec.
        </Text>

        <Text as="small">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec
        </Text>
        <Text as="label">
          This is a label Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor,
          nisl nec
        </Text>
        <Code>
          Test Test Test TeTest Test Test TeTest Test Test TeTest Test Test TeTest Test Test TeTest
          Test Test TeTest Test Test TeTest Test Test TeTest Test Test TeTest Test Test TeTest Test
          Test TeTest Test Test TeTest Test Test TeTest Test Test TeTest Test Test TeTest Test Test
          TeTest Test Test TeTest Test Test TeTest Test Test TeTest Test Test TeTest Test Test
          TeTest Test Test TeTest Test Test TeTest Test Test TeTest Test Test Test Test Test Test
          Test Test Test Test Test Test
        </Code>
        <Code>Test T</Code>
      </View>
      <View
        bottom="largest"
        container
        css={{
          darkThemeSpec: {
            paddingTop: 0,
          },
        }}
        top="largest">
        <Box minimal>
          <Table
            bodyChildren={[
              [
                { label: "1", value: "1" },
                { label: <Button>
                  22
                </Button>, value: "22" },
                { label: "22", value: "22" },
              ],
              [
                { label: "4", value: "4" },
                { label: <Button>204</Button>, value: "204" },
                { label: "204", value: "204" },
              ],
              [
                { label: "7", value: "7" },
                { label: <Button>3</Button>, value: "3" },
                { label: "3", value: "3" },
              ],
            ]}
            headChildren={["Head 1", "Head 2", "Head 3"]}
            rowNumbers
            sort
          />
        </Box>
      </View>
    </Provider>
  );
}
