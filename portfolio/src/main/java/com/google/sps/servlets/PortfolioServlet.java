package com.google.sps.servlets;

import com.google.sps.data.MessagesObject;
import com.google.gson.Gson;
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
    String message1 = "I go to school in Waterloo";
    String message2 = "Favorite color is red";
    String message3 = "Dogs dont see red or blue can't remember";

    MessagesObject messages = new MessagesObject(message1, message2, message3);
    String json = convertToJsonUsingGson(messages);
    
    response.setContentType("application/json;");
    response.getWriter().println(json);
  }

  private String convertToJsonUsingGson(MessagesObject messages) {
    Gson gson = new Gson();
    String json = gson.toJson(messages);
    return json;
  }

  
}
