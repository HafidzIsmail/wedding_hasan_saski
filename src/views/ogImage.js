import * as React from "react"

import featuredImage from "https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/12bc0205-6668-4b08-95c0-782e5f1c39ff/f5bedace-bd02-47a2-9403-ba2b61a2a3e5?org_if_sml=1&amp;q=80&amp;force_format=original"

export const FeaturedImage = (props) => {
    <>
    {
        props.customImage ? (
            <meta property="og:image"
            content={props.customImage}
            />
        )
        :
        (
            <meta name="og:image"
            content={'https://wedding-hasan-saski.vercel.app' + featuredImage} />
        )
    }
    </>
}

export default FeaturedImage