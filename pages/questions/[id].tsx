import createClient from "@/sanity-clients/client";
import { GetStaticPaths,GetStaticProps, GetStaticPropsContext, PreviewData } from "next";
import { Question } from "@/schemas/schema";
import { Answer } from "@/schemas/schema";
import { ParsedUrlQuery } from "querystring";
import Layout from "@/components/layout";

const client=createClient;

interface prop{
    question:Question[];
    answer:Answer[];
}

export const getStaticPaths: GetStaticPaths= async ()=>{
    const questions:Question[]=await client.fetch(`*[_type=='question']`);
    const paths=questions.map((a)=>{
        return {params:{id:a._id}}
    })
    return {paths,fallback:false}

}

export const getStaticProps:GetStaticProps=async(context:GetStaticPropsContext<ParsedUrlQuery,PreviewData>)=>{
    const id=context.params!.id;
    const question:Question=await client.fetch(`*[_id=="${id}"]`); 
    const answer:Answer=await client.fetch(`*[_type=='answer' && question._ref=="${id}"]`);
    return {
        props:{
            question,
            answer
        }
    }
}
    
const questiondetails=(props:prop)=>{
    return(
        <Layout>
            <p>{props.question[0].title}</p>
            <div>
                <div>QUESTION DETAILS</div>
                <div>{props.question[0].details}</div>
            </div>
            <div>
                <div>ANSWER</div>
                <div>{props.answer[0]?.text||"Not yet answered"}</div>
            </div>  
        </Layout>
    )
}
export default questiondetails;