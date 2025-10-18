import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

export const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // For standalone frontend app, don't attempt to connect to WebSocket server
    // This prevents connection errors in production
    console.log('Socket connection disabled for standalone frontend app');
    setSocket(null);

    // Optional: You could implement mock socket functionality here if needed
    // const mockSocket = {
    //   emit: (event, data) => console.log('Mock socket emit:', event, data),
    //   on: (event, callback) => console.log('Mock socket on:', event),
    //   off: (event, callback) => console.log('Mock socket off:', event),
    //   close: () => console.log('Mock socket closed')
    // };
    // setSocket(mockSocket);
  }, []);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};
