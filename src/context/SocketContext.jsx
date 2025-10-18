import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { AuthContext } from "./AuthContext";

export const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    try {
      const newSocket = io("http://localhost:4001", {
        timeout: 5000,
        forceNew: true,
        transports: ['websocket', 'polling']
      });

      newSocket.on('connect', () => {
        console.log('Socket connected successfully');
        setSocket(newSocket);
      });

      newSocket.on('connect_error', (error) => {
        console.log('Socket connection failed:', error.message);
        // Don't set socket if connection fails
        setSocket(null);
      });

      newSocket.on('disconnect', () => {
        console.log('Socket disconnected');
        setSocket(null);
      });

      return () => {
        newSocket.close();
      };
    } catch (error) {
      console.log('Socket initialization failed:', error);
      setSocket(null);
    }
  }, []);

  useEffect(() => {
    if (currentUser && socket) {
      socket.emit("newUser", currentUser.id);
    }
  }, [currentUser, socket]);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};
