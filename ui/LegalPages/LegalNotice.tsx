import React from "react";
import style from "./legal-pages.module.scss";
import BottomSection from "@/components/BottomSection";
import { NextPage } from "next";

/**
 * Legal notice content page structure component
 */

const LegalNotice: NextPage = () => {
  return (
    <div className={style.legalPages}>
      <div className={style.content}>
        <h1>Legal Advice</h1>
        <p>This website belongs to Adsync Technologies Sole Proprietorship LLC</p>
        <h2>Purpose and scope of application</h2>
        <p>
          This Legal Notice regulates access to, browsing and use of the Website __Definitio________
          (hereinafter, &ldquo;the Website&rdquo;), as well as the responsibilities derived from
          using its contents (understanding &ldquo;contents&rdquo; as texts, graphics, drawings,
          designs, codes, software, photographs, music, videos, sound, databases, images,
          expressions and information, as well as any other creation protected by national laws and
          international treaties on intellectual and industrial property). Furthermore, a
          &ldquo;User&rdquo; is understood as a person who accesses, browses or uses the services
          and activities, free or paid, developed on the Website. It will be understood that access
          to or the mere use of the Website by the User implies their adherence to the Terms and
          Conditions contained in this Legal Notice and published at all times and they undertake to
          observe and strictly comply with the provisions herein, as well as any other legal
          provision that may be applicable, thus being obliged to make correct use of the Website.
          The user will be liable to ADSync (hereinafter &quot;ADSync&quot;) or to third parties for
          any damages that may be caused as a result of the breach of this obligation. As a
          consequence of this, the User is invited to carefully read this Legal Notice from time to
          time. The purpose of this Legal Notice is not to regulate any contractual aspects relating
          to the provision by ADSync of its specific services, and is limited to being the legal
          framework for the use of and access to the Website.
        </p>
        <h2>Access to and use of the Website </h2>
        <p>
          Access to the Website by Users is absolutely free of charge. All information provided by
          the User through the Website, for example in the &ldquo;Contact us&rdquo; section, which
          contains personal data, will be subject to our&#160;Privacy Policy. With regard to the
          information provided by the User, they will be responsible for ensuring that this
          information is reliable, complete and accurate.
        </p>
        <p>
          Access to, browsing and use of the Website is the User&rsquo;s responsibility, therefore,
          they undertake to diligently observe any additional instructions given by ADSync regarding
          the use of the Website and its contents, and to not use ADSync&rsquo;s service nor its
          contents in any way that is not expressly authorised by these Conditions.
        </p>
        <p>
          By accessing and using the Website, the User accepts the contents of these Conditions. In
          particular, the User will refrain from:
        </p>
        <ol>
          <li>
            Using the contents included on the Website for purposes or intentions contrary to the
            law, morals and generally accepted good customs or public order.
          </li>
          <li>
            Reproducing or copying, distributing, allowing access to the public through any form of
            public communication, transforming or modifying the content, unless authorisation has
            been received from the owner of the corresponding rights or it is legally permitted.
          </li>
          <li>
            Using the contents and, in particular, the information obtained through the Website for
            advertising purposes;
          </li>
          <li>
            Providing any personal information about them or relating to the use of and access to
            the Website that is false or has been illegally obtained.
          </li>
          <li>
            Creating any link to this Website from any other website without the prior and express
            consent of the owner of this Website.
          </li>
        </ol>
        <h3>COPYRIGHT, AUTHORS&rsquo; RIGHTS AND DATABASE RIGHTS</h3>
        <p>
          All content included in or made available through our website, such as text, graphics,
          logos, button icons, images, audio clips, digital downloads and data compilations is the
          property of ADSync and is protected by local and international copyright, authors&rsquo;
          rights and database right laws. You may not extract and/or re-utilize parts of the content
          of any ADSync service without our express written consent. In particular, you may not
          utilize any data mining, robots, or similar data gathering and extraction tools to extract
          (whether once or many times) for re-utilization any substantial parts of the content of
          any ADsync , without our express written consent. You may also not create and/or publish
          your own website that features substantial parts of this website Service without our
          express written consent.
        </p>
        <b>Disclaimers and Warranties</b>
        <p>
          THIS SITE IS PROVIDED BY _Adsycn Technologies Sole Proprietorship LLC__ ON AN &quot;AS
          IS&quot; AND &quot;AS AVAILABLE&quot; BASIS. ADSYNC MAKES NO REPRESENTATIONS OR WARRANTIES
          OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THIS SITE, OR THE INFORMATION,
          CONTENT OR MATERIALS INCLUDED ON THIS SITE. YOU EXPRESSLY AGREE THAT YOUR USE OF THIS SITE
          IS AT YOUR SOLE RISK.
        </p>
        <b>Children</b>
        <p>
          Our online Services provide information solutions intended for professionals and we do not
          knowingly collect any personal information from children under the age of 13. If you are
          providing personal information for an individual less than 13 years of age, for whatever
          reason, you are providing us your affirmative parental consent as the legal parent or
          guardian to collect, use and process the information of the individual less than 13 years
          of age, consistent with this Privacy Policy.
        </p>
        <p>
          Your continued use, access, or interaction with our Websites, Products, or Properties or
          your continued communication with us after the updated Privacy Notice has been posted (or
          any other indication of your consent) will constitute your acceptance of the updated
          Privacy Notice.
        </p>
        <h3>GOVERNING LAW AND DISPUTE RESOLUTION</h3>
        <p>
          This policy is governed by the United Arab Emirates
          laws. Any disputes arising thereof or connected thereto shall be settled by the Dubai
          courts between ADSync Technologies and you.
        </p>
        <h3>INTERNATIONAL JURISDICTIONS</h3>
        <p>
          This Websites are hosted in the United Arab Emirates (UAE),
          and are subject to UAE law. If you access the Websites from other countries, please be
          advised that you are transferring your personal information into the UAE, and by using our
          Websites you consent to that transfer and use of your personal information in accordance
          with this Privacy Notice. You also agree to abide by the applicable laws of the UAE,
          including state and federal law and your agreements with us. Any persons accessing our
          Websites from any jurisdiction with laws or regulations governing the use of the Internet,
          including personal data collection, use and disclosure, different from those of the
          jurisdictions mentioned above may only use the Websites in a manner lawful in their
          jurisdiction. If your use of the Websites would be unlawful in your jurisdiction, you may
          not use the Websites.
        </p>
      </div>
      <BottomSection />
    </div>
  );
};

export default LegalNotice;
