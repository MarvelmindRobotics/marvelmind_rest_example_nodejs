# marvelmind_rest_example_nodejs
Example of Marvelmind REST API server (Node.js)

To use this server:
- Achieve a good tracking using the Marvelmind navigation system.
  Refer to operating manual (https://marvelmind.com/pics/marvelmind_navigation_system_manual.pdf)
  and other documents on https://marvelmind.com for details.
- Install and run this Node.js application on the server
- In Marvelmind dashboard select menu "Settings/REST settings"
-   In the window select checkbox "REST output enable"
-   In the window "Destination server" type: <URL>:8080/api/process
    where URL is the address of your server. 
    If the server is located on the same PC as dashboard, <URL> is localhost:
    localhost:8080/api/process
- Select required data to transmit by corresponding checkboxes (mobile beacon location, telemetry, IMU etc)
- Data in JSON format should come to the application.
  See REST chapter in interfaces document (https://marvelmind.com/pics/marvelmind_interfaces.pdf) for more details.
- Application prints incoming data to the console and sends echo back to the client (dashboard).
- You can select checkbox "Show response from server" to see the server reply.

