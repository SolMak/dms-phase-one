import React from "react"
import Document from "next/document"

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const originalRenderPage = ctx.renderPage

        try {
            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps
            }
        } finally {

        }
    }
}
