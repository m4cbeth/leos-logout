"use client"

import { Heading } from "@/components/helpers";

export default function Entry({jotVal, jotSet, children, title}) {
    return (
        <div>
            <Heading title={title} />
        </div>
    )
}