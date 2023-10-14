import { Link } from "react-router-dom";

function Resume() {
    return (
        <>
            <object data="/images/HalasResume.pdf" type="application/pdf" width="100%" height="100%">
                <p>Unable to display PDF file. <a href="/images/HalasResume.pdf">Download</a> instead.</p>
            </object>
        </>
    )
}

export default Resume;