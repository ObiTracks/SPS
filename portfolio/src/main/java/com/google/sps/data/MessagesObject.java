package com.google.sps.data;

/** Class containing hardcoded messages. */
public final class MessagesObject {

    private String message1;
    private String message2;
    private String message3;

    public MessagesObject(String message1, String message2, String message3) {
      this.message1 = message1;
      this.message2 = message2;
      this.message3 = message3;
    }

    public String getMessage1() {
        return message1;
    }
    public String getMessage2() {
        return message2;
    }
    public String getMessage3() {
        return message3;
    }

  }
