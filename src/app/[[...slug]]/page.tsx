import '../../index.css'
import PostsSection from '../../components/PostsSection/PostsSection.jsx'; 
 
export function generateStaticParams() {
  return [{ slug: [''] }]
}
 
export default function Page() {
  return (
   <p>ciao</p>
  );
}