// AccordionSection.js

import React, { useState } from "react";
import {FaPlus} from "react-icons/fa";
import "./cstyle.css"; // Import your custom CSS for the accordion styles

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCont, setCont] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
    setCont(!isCont);
  };

  return (
    <li className={`accordion-item ${isOpen ? "open" : ""}`}>
      <button className="accordion-button" onClick={toggleAccordion}>
        <div className="aaaccc">
        {question}
        </div>
        <div className="aaaccc">
        <FaPlus className="accordion-icon" />
        </div>
      </button>
      <div className={`accordion-content ${isCont ? "show" : ""}`}>{answer}</div>
    </li>
  );
};

const AccordionSection = () => {
  return (
    <section className="accordion-wrapper" id="FAQ">
        <div className="container">
      <h2 className="accordion-title">Any questions left?</h2>
      <p className="accordion-description">
        Browse our FAQs below or email our friendly team at:{" "}<br />
        <a className="accordion-mail" href="mailto:support@w3a.tech">
          support@w3a.tech
        </a>
      </p>
      <ul className="accordion-list">
        <AccordionItem
          question="How do I know this is safe?"
          answer={
            "Replace with your answer JSX for this accordion item"
          }
        />
        <AccordionItem
          question="How is W3A different from other traditional antivirus software?"
          answer={
            "Replace with your answer JSX for this accordion item"
          }
        /> <AccordionItem
          question="
          How exactly does W3A protect me?"
          answer={"W3A stands guard while you browse the internet, investigating the other parties and assets which you interact with. The extension offers proactive phishing protection. It checks domain names against its database of blocklists and whitelists using AI similarity validation and immediately alerts you if you’re heading to a phishing site. When you’re about to sign a transaction or a message, W3A briefly pauses it and analyzes for red flags. It uses proprietary security audit frameworks to detect honeypots, suspicious logic, dangerous functions, compromising access permissions to assets, wash trade patterns, and other threats. The tool also simulates the transaction and shows what happens if it’s approved. You will clearly see what you will receive and what you will give away as a result of the transaction. Within a few seconds, W3A summarizes all the potential threats in a report. With all the information in hand, you can decide whether or not to proceed with it."
          }
        />
        <AccordionItem
          question="How do I use W3A?"
          answer={
            "The installation is simple and quick. Choose the option that works for you and add the extension from: Chrome Web Store to Chrome and Brave browsers. Microsoft Edge Add-ons to the Edge browser. Add-ons for Firefox to the Firefox browser. Or install it directly from the GitHub open-source repository. Once it’s enabled, it begins working immediately and alerts you anytime you have a wallet transaction call or browse to a potentially threatening site.Note: Web3 Antivirus (W3A) will never ask for access to your wallet, your assets, or your seed phrase."
          }
        />
        <AccordionItem
          question="Do I ever need to provide my seed phrase?"
          answer={
            "No. Web3 Antivirus never asks for your seed phrase and has zero access to your wallet and its assets."
          }
        />
        <AccordionItem
          question="How does transaction simulation work?"
          answer={
            "Transaction simulation helps to show you what happens if you approve a transaction. This means you can discover potential vulnerabilities or side effects without compromising the security of your wallet. You will also clearly see what you will receive and what you will give away as a result of the transaction.To execute the simulation, W3A analyzes the smart contract behind the transaction and traces each call that the contract makes. It then audits those connected contracts in the same manner and shows you the result of the contracts’ full execution."
          }
          />
          <AccordionItem
          question="Can I try W3A for free?"
          answer={
            "Yes. Our basic plan is completely free. The extension can be installed directly from: Chrome Web Store to Chrome and Brave browsers. Microsoft Edge Add-ons to the Edge browser. Add-ons for Firefox to the Firefox browser."
          }
        />
        <AccordionItem
          question="What is next for Web3 Antivirus?"
          answer={
            "We constantly upgrade Web3 Antivirus enhancing its abilities and improving auditing methodology to detect various threats and scams within seconds. We’re also adding support for new browsers, wallets, and blockchains. Check out our blog for updates and release notes for new versions of the extension. Soon-to-be-released features include the W3A Dashboard which allows you to see logs of threats you’ve encountered, detailed transaction lists, and delegated token rights."
          }
          />
      </ul>
      </div>
    </section>
  );
};

export default AccordionSection;
