import { ProfileSettings } from "./components/profile-settings";
import { toast } from "sonner@2.0.3";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const handleSave = () => {
    toast.success("Profile settings saved successfully!");
  };

  const handleCancel = () => {
    toast.info("Changes discarded");
  };

  return (
    <div className="min-h-screen bg-background">
      <ProfileSettings onSave={handleSave} onCancel={handleCancel} />
      <Toaster />
    </div>
  );
}