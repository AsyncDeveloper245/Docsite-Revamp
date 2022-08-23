import http.server
import socketserver



# class Handler(http.server.SimpleHTTPRequestHandler):
#     def __init__(self, *args, **kwargs):
#         super().__init__(*args, directory=DIRECTORY, **kwargs)


# with socketserver.TCPServer(("", PORT), Handler) as httpd:
#     print("serving at port", PORT)
#     print("Starting Server on Port", PORT)
#     print("Note: You can change the port by changing the PORT variable in the script\nThis is a development server. Do not use it in production.\nUse CTRL+C to stop the Server")
#     httpd.serve_forever()


Handler = http.server.SimpleHTTPRequestHandler
import argparse

my_parser = argparse.ArgumentParser(allow_abbrev=True)
my_parser.add_argument('-port', action='store', type=str, required=False)

if my_parser.parse_args().port:
    PORT = int(my_parser.parse_args().port)
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print("Starting Server on Port", PORT)
        print("Note: You can change the port by changing the PORT variable in the script\nThis is a development server. Do not use it in production.\nUse CTRL+C to stop the Server")
        httpd.serve_forever()

else:
    PORT = 8080
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print("Starting Server on Port", PORT)
        print("Note: You can change the port by changing the PORT variable in the script\nThis is a development server. Do not use it in production.\nUse CTRL+C to stop the Server")
        httpd.serve_forever()



# import socketserver

# class MyTCPHandler(socketserver.BaseRequestHandler):
#     """
#     The request handler class for our server.

#     It is instantiated once per connection to the server, and must
#     override the handle() method to implement communication to the
#     client.
#     """

#     def handle(self):
#         # self.request is the TCP socket connected to the client
#         self.data = self.request.recv(1024).strip()
#         print("{} wrote:".format(self.client_address[0]))
#         print(self.data)
#         # just send back the same data, but upper-cased
#         self.request.sendall(self.data.upper())

# if __name__ == "__main__":
#     HOST, PORT = "127.0.0.1", 8080

#     # Create the server, binding to localhost on port 8080
#     with socketserver.TCPServer((HOST, PORT), MyTCPHandler) as server:
#         # Activate the server; this will keep running until you
#         # interrupt the program with Ctrl-C
#         print("Server started on port " + str(PORT))
#         print(f"You can access the server at http://{HOST}:{PORT}")
#         server.serve_forever()