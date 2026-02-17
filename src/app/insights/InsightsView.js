"use client";

import { useState } from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';
import Casestudies from './Casestudies/page';
import Whitepaper from './Whitepaper/page';
import Highlightblog from './highlitedblog/page';

export default function InsightsView() {
    const [key, setKey] = useState('casestudies');
    const [activeTab, setActiveTab] = useState("casestudies");
   
    return (
        <>
            <div className='inner-head grey pad80'>
                <Container className='text-center'>
                    <h1 className='h4'>Insi<span>ghts</span></h1>
                    <p>Expert insights that decode industry shifts and guide smarter,<br className='d-none d-md-block'/> more resilient decision-making.</p>
                </Container>
            </div>

            {/* Component names should usually be Capitalized (HighlightBlog) */}
            <Highlightblog />

            <div className="pad80 insights-wrapper grey">
                <Container>
                    <Tabs
                        id="insights-tabs"
                        //activeKey={key} 
                        //onSelect={(k) => setKey(k)}
                        activeKey={activeTab}
                        onSelect={(k) => setActiveTab(k)}
                        className="justify-content-center mb-5 border-0"
                    >
                        <Tab eventKey="casestudies" title="Case Studies">
                           <Casestudies activeTab={activeTab}  />
                        </Tab>
                        <Tab eventKey="whitepaper" title="White Paper">
                           <Whitepaper activeTab={activeTab} />
                        </Tab>
                    </Tabs>
                </Container>
            </div>
        </>
    );
}