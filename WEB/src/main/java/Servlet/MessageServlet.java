package Servlet;

import mapper.MessageMapper;
import org.apache.ibatis.session.SqlSession;
import pojo.Message;
import util.SqlSessionUtil;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

public class MessageServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String equation = req.getParameter("equation");
        String result = req.getParameter("result");
        SqlSession session = SqlSessionUtil.openSession();
        MessageMapper mapper = session.getMapper(MessageMapper.class);
        HttpSession websession = req.getSession();
        String username = (String) websession.getAttribute("username");
        Message message = new Message();
        message.setUser(username);
        message.setEquation(equation);
        message.setRecord(result);
        mapper.insert(message);
        session.commit();
        session.close();
    }
}
