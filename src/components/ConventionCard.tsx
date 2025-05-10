import { Button } from "../components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import { Label } from "../components/ui/label"
import Logo from "../assets/react.svg"

export function ConventionCard() {
    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Test</CardTitle>
                <CardDescription>This is a test convention.</CardDescription>
            </CardHeader>
            <CardContent>
                <div>
                    <img src={Logo} alt='Logo' />
                </div>
                <Label>Test</Label>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline">Settings</Button>
                <Button>View</Button>
            </CardFooter>
        </Card>
    )
}

export default ConventionCard;