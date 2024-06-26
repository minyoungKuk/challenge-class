"use client";

import Button from "@/components/Button";

export default function Home() {
  return (
    <main>
      <div className="h-screen flex flex-col items-center justify-center gap-y-4">
        {/* Chips */}
        {/* <Chip label="chip" intent="primary" />
        <Chip label="chip" intent="secondary" />
        <Chip label="chip" intent="danger" />
        <Chip label="chip" intent="warning" />
        <Chip label="chip" intent="info" />
        <Chip label="chip" /> */}

        {/* Button */}
        {/* <Button intent={"primary"} onClick={() => alert("안녕?")}>
          primary
        </Button>
        <Button intent={"primary"} size="sm">
          primary
        </Button>
        <Button intent={"primary"} size="md">
          primary
        </Button>
        <Button intent={"primary"} size="lg">
          primary
        </Button>
        <Button intent={"primary"} size="lg" variant="outline">
          primary
        </Button>

        <Button intent={"danger"} size="sm">
          danger
        </Button>
        <Button intent={"danger"} size="md">
          danger
        </Button>
        <Button intent={"danger"} size="lg">
          danger
        </Button>
        <Button intent={"danger"} size="lg" variant="outline">
          danger
        </Button>
        <Button intent={"secondary"}>secondary</Button>
        <Button intent={"secondary"} variant="outline">
          secondary
        </Button>
        <Button>default</Button> */}

        <Button intent={"primary"} size="md">
          primary
        </Button>
        <Button intent={"primary"} size="md" href="/">
          primary
        </Button>
      </div>
    </main>
  );
}
