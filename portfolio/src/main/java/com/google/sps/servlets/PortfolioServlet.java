package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;

/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/testing")
public class PortfolioServlet extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    ArrayList<String> messages = new ArrayList<String>();
    messages.add("I go to school in Waterloo");
    messages.add("Favorite color is red");
    messages.add("Dogs dont see red or blue can't remember");

    String json = "{";
    String itemName; int i = 0;
    for (String message: messages){
        i++;
        itemName = "message" + i;
        json +=  "\"" + itemName + "\":";
        json +=  "\"" + message + "\":";
        
    }
    json += "}";


    response.setContentType("application/json;");
    response.getWriter().println(json);
    // response.setContentType("text/html;");
    // response.getWriter().println("<h1>New servlet works!</h1>");
  }
}
