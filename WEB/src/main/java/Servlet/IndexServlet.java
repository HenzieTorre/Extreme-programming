package Servlet;

import mapper.UserMapper;
import pojo.User;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;


@WebServlet("/registerServlet")
public class IndexServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String username = req.getParameter("username");
        String userpassword = req.getParameter("userpassword");
        String school = req.getParameter("school");
        String phone = req.getParameter("phone");
        String mail = req.getParameter("mail");

        User user = new User();
        user.setUsername(username);
        user.setPassword(userpassword);
        user.setSchool(school);
        user.setPhone(phone);
        user.setMail(mail);

        //1.获取sqlSessionFactory对象
        String resource = "mybatis-config.xml";
        InputStream inputStream = Resources.getResourceAsStream(resource);
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);
        //2.获取sqlSession对象
        SqlSession sqlSession=sqlSessionFactory.openSession();
        //3.获取Mapper
        UserMapper userMapper = sqlSession.getMapper(UserMapper.class);
        //4.调用方法
        User user1 = userMapper.selectById(username);
        //设置输出字符集
        resp.setContentType("text/html;charset=utf-8");
        PrintWriter writer = resp.getWriter();
        if(user1!=null){
            writer.write("账户已存在");
        }else{
            userMapper.add(user);
            sqlSession.commit();
            writer.write("创建成功");
        }
        //5.释放资源
        sqlSession.close();
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        this.doGet(req, resp);
    }
}