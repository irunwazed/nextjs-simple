import Layout from "../components/Layout"
import Image from "next/image"

export default function Page() {
  return (
    <>
    <Layout pageTitle="Home">
      <h1>Home</h1>
      <Image src="/poto.jpg" width={200} height={200} alt="poto" />
    </Layout>
    </>
  )
}