import { Status } from "./Status";
export const Card=(props)=>{
    return (
        <article className="w-96 h-fit rounded-lg shadow-xl my-8 mx-auto">
            <img 
            className="rounded-t-lg"
              alt="cardImg"
              src={props.Img}
            />
          <div className="p-8"> 
           <Status status={props.tag}/>
            <h3 className="text-3xl mt-2 font-extrabold">{props.title}</h3>
            <div>
              <p className="mt-3 text-gray-400 font-semibold">
            {props.desc}
              </p>
            </div>
          </div>
        </article>
   );
}