import Layout from '../components/layout'
// import { getAllPostIds, getPostData } from '../../lib/posts'


function Post({ blog }) {
    return (
        <div>
            <Layout>
                <h1>Post</h1>
                {blog.id} <br />
                {blog.name}
                <br />
                {/* {postData.id}
                <br />
                {postData.date}
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} /> */}
            </Layout>
        </div>
    )
}

export default Post

export async function getStaticPaths() {
    const response = await fetch('https://gorest.co.in/public/v1/users');
    const data = await response.json();

    console.log(data.data);
    const paths = data.data.map(item => ({
        params : {

        id : `${item.id}`}

    }))
    // console.log(paths);

    return {
        paths ,
        fallback : false
    }
}
// param => url id 

export async function getStaticProps(context) {
  const {params} = context
  const response = await fetch(`https://gorest.co.in/public/v1/users/${params.id}`);
  const data = await response.json()
  console.log(data.data);
  return {
      props : {
          blog : data.data
      }
  }
}