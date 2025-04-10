import {OpenInV0Button} from "../open-in-v0-button";
import CopyCommandButton from "../copy-command-button";
import {Separator} from "@/components/ui/separator";
import InstallationCommands from "../installation-commands";
import CodeSnippet from "../code-snippet";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/8bit/alert-dialog"
import {Button} from "@/components/ui/8bit/button";

export default function AlertDialogPage() {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-2">
                <h1 className="text-3xl font-bold">Alert Dialog</h1>
                <CopyCommandButton copyCommand={`pnpm dlx shadcn@canary add ${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-alert-dialog.json`}
                    command={"pnpm dlx shadcn@canary add 8bit-alert-dialog"}/>
            </div>

            <p className="text-muted-foreground">
                A 8-bit  modal dialog that interrupts the user with important content and expects a response.
            </p>

            <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
                <div className="flex items-center justify-between">
                    <h2 className="text-sm text-muted-foreground sm:pl-3">
                        A simple 8-bit alert dialog component
                    </h2>

                    <div className="flex items-center gap-2">
                        <OpenInV0Button name="8bit-alert-dialog" className="w-fit"/>
                    </div>
                </div>
                <div className="flex items-center justify-center min-h-[400px] relative">
                    <AlertDialog>
                        <AlertDialogTrigger>
                            <Button variant="outline">Show Dialog</Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    This action cannot be undone. This will permanently delete your
                                                account and remove your data from our servers.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction>Continue</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </div>
            </div>

            <h3 className="text-lg font-bold">Installation</h3>

            <Separator/>

            <InstallationCommands packageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-alert-dialog.json`}/>

            <h3 className="text-lg font-bold mt-10">Usage</h3>

            <Separator/>

    <CodeSnippet>
{`import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/8bit/alert-dialog"`}
   </CodeSnippet>

   <CodeSnippet>
{`<AlertDialog>
  <AlertDialogTrigger>
      <Button variant="outline">Show Dialog</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
      <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your account 
              and remove your data from our servers.
          </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
      </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`}
  </CodeSnippet>
        </div>
    );
}
