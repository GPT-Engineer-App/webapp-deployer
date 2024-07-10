import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const InteractiveWindow = () => {
  const [logs, setLogs] = useState([]);

  const addLog = (message) => {
    setLogs((prevLogs) => [...prevLogs, `${new Date().toLocaleTimeString()}: ${message}`]);
  };

  const handleBuild = () => {
    addLog("Building...");
    // Simulate build process
    setTimeout(() => addLog("Build completed successfully."), 2000);
  };

  const handleDeploy = () => {
    addLog("Deploying...");
    // Simulate deploy process
    setTimeout(() => addLog("Deployment completed successfully."), 3000);
  };

  return (
    <div className="w-96 bg-gray-100 p-4 flex flex-col h-screen">
      <h2 className="text-2xl font-bold mb-2">Interactive Window</h2>
      <p className="text-sm text-gray-600 mb-4">Build and Deploy Web Apps</p>

      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Claude Artifacts</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600">Claude Artifacts will appear here.</p>
        </CardContent>
      </Card>

      <div className="flex space-x-2 mb-4">
        <Button onClick={handleBuild}>Build</Button>
        <Button onClick={handleDeploy}>Deploy</Button>
      </div>

      <Card className="flex-grow">
        <CardHeader>
          <CardTitle>Logs</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[calc(100vh-350px)]">
            {logs.map((log, index) => (
              <p key={index} className="text-sm mb-1">
                {log}
              </p>
            ))}
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export default InteractiveWindow;