import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltf7695f98c1f01bd9/62cbfb91c9db8842cf76cb5b/GHP_MESSI-BOOTS_16-9.jpg?auto=webp&format=pjpg&width=3840&quality=60" />
      <Post img="https://img.allfootballapp.com/www/M00/3E/7E/720x-/-/-/CgAGVmQd2eSAcV0QAADZ2ju_7mA669.jpg.webp" />
      <Post img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvRfUMb6dcA2rukTA_FwStgw7r6TgayH1E3g&usqp=CAU"/>
      <Post img="https://i2-prod.mirror.co.uk/incoming/article30145602.ece/ALTERNATES/n615/0_Lionel-Messi-29.jpg"/>
      <Post img="https://images.mlssoccer.com/image/private/t_editorial_landscape_8_desktop_mobile/prd-league/fq1r3odbxblccsebecls.jpg"/>
      <Post img="https://imagevars.gulfnews.com/2022/12/19/Argentina-s-Lionel-Messi-celebrates-winning-the-World-Cup-with-wife-Antonela-Roccuzzo-and-family.-_18529ee6615_large.jpg"/>
    </div>
  );
}