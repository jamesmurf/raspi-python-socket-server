#!/usr/bin/python           # This is server.py file

import socket               # Import socket module

s = socket.socket()         # Create a socket object
host = socket.gethostname() # Get local machine name
port = 8080                # Reserve a port for your service.
s.bind((host, port))        # Bind to the port
print ('binding to port '+str(port))
s.listen(5)                 # Now wait for client connection.

conn, addr = s.accept()
print('Connected by', addr)
databuffer =""
while 1:
  data = conn.recv(1024)
  datastring = data.decode("utf-8")
  print(databuffer)
  databuffer = databuffer + datastring
  if not data: break
  conn.sendall(databuffer.encode('utf-8'))
conn.close()