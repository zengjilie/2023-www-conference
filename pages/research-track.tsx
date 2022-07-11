import { useEffect } from "react";
import Header from "../comps/Header-2";
import Footer from "../comps/Footer/Footer";
const ResearchTrack = () => {

    useEffect(() => {
        document.body.style.overflowY = 'scroll';
    });

    return (

        <>
            <Header />

            <div className="research">
                < h1 className="research-header">
                    TheWebConf 2023 Research Tracks
                    Preliminary Call For Papers (CFP)
                    “Web Research with Openness, Fairness and Reproducibility”
                </h1>

                <p>
                    We invite contributions to the research tracks of The Web Conference 2023 (formerly known as WWW). The conference will have a hybrid format, hosted by Austin, TX, US, on May 1-5, 2023.
                </p>

                <strong>
                    Instructions for authors of research tracks submissions
                </strong>

                <p>
                    The Web Conference is the premier conference focused on exploring the current state and the evolution of the Web through the lens of different scientific disciplines, including computing science, social science, economics and political sciences.
                </p>

                <p>
                    The scope of the conference is the Web and how it has crucially enabled new research and applications. While the Web feeds on and is part of a broader interdisciplinary ecosystem, including technologies such as machine learning, natural language processing, computer vision, and many others, it remains a distinct scholarly field, with its own research methods, tools, and challenges. As such, submissions that merely use one or another Web artifact — e.g., a dataset or a Web Application Programmer Interface (API) or a social network — rather than answering a specific Web-related scientific research challenge, are out of scope of the conference and will be rejected early during the reviewing process (“desk-rejected”).
                </p>

                <p>
                    In particular, with the rise of machine learning and popularity of Artificial Intelligence (AI), we feel we need to define what a research paper submitted to The Web Conference should be:
                </p>

                <ul>
                    <li>
                        A typical Web Conference paper should not be merely a machine learning or AI paper applied to a dataset from the Web
                    </li>
                    <li>
                        A typical Web Conference paper should have explicit focus on one of the following:
                        <ul>
                            <li>
                                understanding, evaluating and improving the Web as a technical infrastructure; including core Web technologies, standards, and platforms;
                            </li>
                            <li>
                                understanding, evaluating and improving the Web as a socio-economic system;
                            </li>
                            <li>
                                understanding better the impact of the Web and Web technologies;
                            </li>
                            <li>
                                democratizing access to Web content and technologies, making it more accessible, fair, inclusive, and accountable to a wide range of audiences.
                            </li>
                        </ul>
                    </li>
                </ul>

                <p>
                    In this regard, we encourage submissions that:
                </p>

                <ul>
                    <li>
                        present in-depth accounts and novel analyses that improve our understanding of the Web and its impact;
                    </li>
                    <li>
                        introduce and evaluate technical and sociotechnical systems and approaches enabled by core Web technologies, standards, and platforms;
                    </li>
                    <li>
                        make strides in democratizing access to web content and technologies, making it more accessible, fair, inclusive and accountable to different audiences.
                    </li>
                </ul>

                <p>
                    Our research interests are organized in thematic research tracks, each with a dedicated text for what is expected in the track in terms of relevant topics and content. In 2023, these will be (in alphabetical order):
                </p>

                <ul>
                    <li>
                        Crowdsourcing and Human Computation
                    </li>
                    <li>
                        Economics, Monetization, and Online Markets
                    </li>
                    <li>
                        Fairness, Accountability, Transparency, and Ethics on the Web
                    </li>
                    <li>
                        Search
                    </li>
                    <li>
                        Security, Privacy, and Trust
                    </li>
                    <li>
                        Semantics and Knowledge
                    </li>
                    <li>
                        Social Network Analysis and Graph Algorithms
                    </li>
                    <li>
                        Systems and Infrastructure for Web, Mobile, and WoT
                    </li>
                    <li>
                        User Modeling and Personalization
                    </li>
                    <li>
                        Web and Society
                    </li>
                    <li>
                        Web Mining and Content Analysis
                    </li>
                </ul>
                <p>
                    A track-specific CFP for each research track will be available shortly. Note that this year we are introducing a new research track on “Fairness, Accountability, Transparency, and Ethics on the Web”.
                </p>
                <p>
                    In addition to the research tracks listed earlier, the conference will also feature a set of <strong>special tracks</strong>, which reflect emerging topics and trends in the community. You may want to consider them when deciding if and where to submit your work.
                </p>

                <h2>
                    Submission guidelines
                </h2>

                <p>
                    For the research tracks, submissions are limited to 8 content pages, which should include all figures and tables. In addition, you can include up to 2 pages of additional supplementary material, plus additional pages for references, until completing a maximum of 12 pages. The total count of pages of your submission must not exceed 12 pages. Papers must be formatted according to the instructions below, and those not complying to the page limits or not following the formatting guidelines will be desk-rejected. Authors will also be asked to confirm their length compliance during paper submission.
                </p>

                <p>
                    Submissions will be handled via EasyChair, at
                </p>
                <a href="https://easychair.org/conferences/?conf=thewebconf2023">https://easychair.org/conferences/?conf=thewebconf2023</a>

                <p>
                    Please carefully verify that when submitting your paper, you <strong>select the right track for your paper</strong>. This is important because your paper will be assessed in its relevance to the conference and its relevance to the track-specific CFP of the track that you submitted to.
                </p>

                <h2>
                    Formatting the submissions
                </h2>

                <p>
                    Submissions must adhere to the <a href="https://www.acm.org/publications/proceedings-template">ACM template and format</a> . Please remember to add Concepts and Keywords. Please use the template in traditional double-column format to prepare your submissions. For example, word users may use Word Interim Template, and LaTeX users may use the “sample-sigconf” template. Overleaf users may want to use the <a href="https://www.overleaf.com/latex/templates/association-for-computing-machinery-acm-sig-proceedings-template/bmvfhcdnxfty"> ACM proceedings template available in Overleaf</a>.
                </p>
                <p>
                    Submissions for review must be in PDF format. They must be self-contained and written in English. Submissions that do not follow these guidelines, or do not view or print properly, will be rejected without review.
                </p>

                <h2>
                    Author identity & research funding transparency
                </h2>

                <p>
                    The review process will be double-blind. The submitted document should omit any author names, affiliations, or other identifying information. This may include, but is not restricted to acknowledgements, self-citations, references to prior work by the author(s), and so on. Submissions not complying to this guidance will be desk-rejected; authors will also be asked to confirm their anonymization compliance during paper submission. Reviewers will be instructed not to attempt to find out who the authors are.
                </p>
                <p>
                    You may explicitly refer in the paper to organizations that provided datasets, hosted experiments, or deployed solutions and tools. In other words, instead of saying, e.g., “we analyzed data from an online service”, the authors may name the online service (search engine, social network, content sharing site, etc.) in question. The reviewers will be informed that naming organizations in papers does not necessarily imply that the authors are currently affiliated with said organization.
                </p>
                <p>
                    Camera-ready versions of accepted papers can and should include all information to identify authors, and should acknowledge any funding received that directly supported the presented research.
                </p>

                <h2>
                    Originality and concurrent submissions
                </h2>

                <p>
                    Submissions must present original work — this means that papers published or accepted to any peer-reviewed conference or a journal with published proceedings cannot be submitted here; also, authors must appropriately cite their prior work (considering the double-blind review policy).
                </p>
                <p>
                    Submissions available only online that have been previously presented orally, as posters or abstracts-only, or in venues with no formal proceedings, including workshops without proceedings or PhD symposia, are allowed. Authors may submit anonymized work that is already available as a preprint (e.g., on arXiv or SSRN) without citing it. Availability of non-anonymous preprints will not result in a desk rejection. Reviewers will be instructed not to actively look for such preprints, and finding such a preprint does not clash with our submission policies.
                </p>
                <p>
                    <strong> Concurrent submissions are not allowed </strong>– this means that papers that are currently under review cannot be submitted to this conference; conversely, while the paper is under review here, it should not be submitted elsewhere. The program committee works closely with other related venues with similar review timelines to ensure this policy is enforced.
                </p>

                <p>
                    The ACM has a strict <a href="https://www.acm.org/publications/policies/plagiarism-overview"> policy against plagiarism, misrepresentation, and falsification</a> that applies to all publications, and a policy stating <a href="https://www.acm.org/publications/policies/roles-and-responsibilities#h-criteria-for-authorship"> who can be considered an author in a submission</a>.
                </p>

                <h2>
                    Ethical use of data and informed consent
                </h2>

                <p>
                    Authors are encouraged to include a section on the ethical use of data and/or informed consent of research subjects in their paper, when appropriate. You and your co-authors are subject to all <a href="https://www.acm.org/publications/policies/toc"> ACM Publications Policies</a>, including ACM’s <a href="https://www.acm.org/publications/policies/research-involving-human-participants-and-subjects"> Publications Policy on Research Involving Human Participants and Subjects</a> (posted in 2021). Please ensure all authors are familiar with these policies.
                </p>
                <p>
                    Please consult the regulations of your institution(s) indicating when a review by an Institutional Ethics Review Board (IRB) is needed. Note that submitting your research for approval by such may not always be sufficient. Even if such research has been approved by your IRB, the program committee might raise additional concerns about the ethical implications of the work and include these concerns in its review.
                </p>

                <h2>
                    Review process
                </h2>

                <ul>
                    <li>
                        Each paper is submitted to one of the tracks listed earlier.
                    </li>
                    <li>
                        Track  Chairs (TC) for each track review the paper for fitness to the conference and track, formatting, and page limits, <strong>desk-rejecting papers that do not position themselves clearly within the scope of the conference and the track</strong>, or do not satisfy formatting requirements.
                    </li>
                    <li>
                        Program Committee (PC) members will self-declare their expertise for each paper (passing knowledge, knowledgeable, expert). Each submission will receive at least three independent reviews within each track. The goal of the review step is to provide constructive evaluation of a submitted paper. A Senior Program Committee (SPC) member, will also provide a summary (“meta review”) and will oversee each submission and its review.
                    </li>
                    <li>
                        The submission will be discussed between PC members the assigned SPC, and track chairs, pre- and post-rebuttal (see below). Papers will be ranked based on a range of factors including technical merit, originality, potential impact, quality of execution, quality of presentation, related work, reproducibility of results, and ethics. Based on this ranking, track chairs will recommend papers for presentation at the conference, inclusion in the proceedings, and awards.
                    </li>
                </ul>

                <h2>
                    Contributing to reviews
                </h2>
                <p>
                    Conferences like The Web Conference happen because hundreds and thousands of members of the scientific community volunteer to help in many capacities. This includes ensuring that the conference maintains its high standards through constructive, useful, fair reviews.
                </p>
                <p>
                    Submission numbers are expected to rise, against a background of unprecedented challenges in our professional and private lives. For these reasons, we will put a call for nominations of additional reviewers that can also be authors of submitted papers. The nominations that are deemed qualified reviewers will be added to the PC for specific tracks, if there is need for additional reviewers.
                </p>

                <h2>
                    Rebuttal
                </h2>
                <p>
                    To inform final decisions, The Web Conference 2023 will consider author rebuttals. Authors will have the chance to provide brief rebuttals in response to the reviews, mainly making clarifications and answering key questions raised by the reviewers. No additional technical contents or experimental results will be considered during the rebuttal phase. The final decision will consider the rebuttal from the authors where applicable.
                </p>

                <h2>
                    Publication policy
                </h2>
                <p>
                    Accepted papers will require a further revision to meet the requirements and page limits of the camera-ready format required by ACM. Instructions for the preparation of the camera-ready versions of the papers will be provided after acceptance.
                </p>
                <p>
                    All accepted papers will be published by ACM and will be accessible via the ACM Digital Library. To be included in the proceedings, at least one author of each accepted paper must register for the conference and present the paper there.
                </p>

                <h2>
                    Important dates
                </h2>
                <ul>
                    <li>
                        Abstract submission: Thursday, October 6, 2022. This is compulsory for all papers.
                    </li>
                    <li>
                        Full papers submission: Thursday, October 13, 2022
                    </li>
                    <li>
                        Rebuttal: Thursday, December 22, 2022
                    </li>
                    <li>
                        Notification: Wednesday, January 25, 2023
                    </li>
                </ul>

                <p>
                    All submission deadlines are end-of-day in the Anywhere on Earth (AoE) time zone.
                </p>

                <h2>
                    Program Committee chairs
                </h2>

                <ul>
                    <li>
                        Lora Aroyo (Google)
                    </li>
                    <li>
                        Carlos Castillo (ICREA and Universitat Pompeu Fabra)
                    </li>
                    <li>
                        Geert-Jan Houben (TU Delft)
                    </li>
                </ul>

                <p>
                    You can reach the chairs at: <a href="pc-chairs2023@thewebconf.org">pc-chairs2023@thewebconf.org</a>
                </p>
            </div>

            <Footer />
        </>

    )
}

export default ResearchTrack;