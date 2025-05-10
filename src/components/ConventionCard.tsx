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
import { Convention } from "../types/Convention";
import Logo from '../assets/react.svg'

interface ConventionCardProps {
    convention: Convention;
  }

export function ConventionCard({ convention }: ConventionCardProps) {
    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>{ convention.name }</CardTitle>
                <CardDescription>{ convention.description }</CardDescription>
            </CardHeader>
            <CardContent>
            <div className="mb-2">
                <img src={Logo} alt={`${convention.name} Logo`} className="w-full h-auto rounded" />
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