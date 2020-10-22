import * as signalR from '@aspnet/signalr'
 
const signalr = new signalR.HubConnectionBuilder()
                    .withUrl("https://localhost:44357/playhub")
                    .build();

export default signalr