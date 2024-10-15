export default function Docs({ params }: { params: { slug: string[] } }) {
  if (params.slug.length == 3) {
    return (
      <h1>
        Document for segment feature {params.slug[0]} and concept{" "}
        {params.slug[1]} and example {params.slug[2]}{" "}
      </h1>
    );
  } else if (params.slug.length == 2) {
    return (
      <h1>
        Document for segment feature {params.slug[0]} and concept{" "}
        {params.slug[1]}{" "}
      </h1>
    );
  } else if (params.slug.length == 1) {
    return <h1>Document for segment feature {params.slug[0]} </h1>;
  } 
   return <h1>Document for Segment home page </h1>;
}

// it extended part of dynamic routes