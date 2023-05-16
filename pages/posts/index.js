import Link from 'next/link'
import React from 'react'

const Posts = (props) => {
  return (
    <div>
      {console.log(props)}
      posts
      {props.posts.map((m, i) => (
        <div key={i}>
          <Link href={`/posts/${m.id}`} >{m.title}</Link>
        </div>

      ))}
    </div>
  )
}


export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/posts')
  const data = await res.json()

  return {
    props: {
      posts: data,
    }
  }
}

export default Posts




// getStaticProps getAllData in build-time
// getStaticPath   /posts/1
// getServerSideProps /posts/1 send request every time
