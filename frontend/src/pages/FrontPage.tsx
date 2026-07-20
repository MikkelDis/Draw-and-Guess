import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AvatarSelector from "../components/functional/AvaterSelector.tsx";
import { Button } from "@/components/ui/button";
import MeshGradientBackgroundDemo from "@/components/ui/mesh-gradient.tsx";
import {useState} from "react"
import { Link } from "react-router-dom";

export default function FrontPage() {
    const [avatar, setAvatar] = useState("");

  return (
    <div className="relative min-h-screen">
        <div className="absolute -z-10">
            <MeshGradientBackgroundDemo></MeshGradientBackgroundDemo>
        </div>
        
      <div className="gap-10 flex justify-center min-h-screen items-center flex-col">
        <h1 className="text-7xl font-bold tracking-tight text-white" >Quick-Sketch</h1>
        <Card className="w-full max-w-md shadow-2xl shadow-blue-500/20">
          <CardContent>
            <div className="flex gap-2 flex-col items-center">
              <Label className="text-lg" htmlFor="Username">
                Username
              </Label>
              <Input id="Username" type="text" />
              <AvatarSelector onAvatarChange={setAvatar} />
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex gap-3 justify-center w-full">
              <Button variant="default" size="lg">
                Join Room
              </Button>
              <Button variant="outline" size="lg">
                <Link to={"/create"} state={{avatar}}>Create Room</Link>
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
