import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';
import './Accordion.css';

export default function AccordionComponent() {
    const location = useLocation();
    const showBackButton = location.pathname !== '/';

    return (
      <div className="accordionContainer">
        {showBackButton && (
          <Link to="/" className="backButton">Back</Link>
        )}
        <div className="accordionWrapper">
          <Accordion allowZeroExpanded>
              <AccordionItem>
                  <AccordionItemHeading>
                      <AccordionItemButton>
                          What harsh truths do you prefer to ignore?
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                      <p>
                          Exercitation in fugiat est ut ad ea cupidatat ut in
                          cupidatat occaecat ut occaecat consequat est minim minim
                          esse tempor laborum consequat esse adipisicing eu
                          reprehenderit enim.
                      </p>
                  </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                  <AccordionItemHeading>
                      <AccordionItemButton>
                          Is free will real or just an illusion?
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                      <p>
                          In ad velit in ex nostrud dolore cupidatat consectetur
                          ea in ut nostrud velit in irure cillum tempor laboris
                          sed adipisicing eu esse duis nulla non.
                      </p>
                  </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                  <AccordionItemHeading>
                      <AccordionItemButton>
                        Is there a meaning to life? If so, what is it?
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                      <p>
                        Consectetur pariatur proident irure proident ea laboris ut do do quis consequat sed officia dolore consequat ut deserunt ea sit sit culpa.
                      </p>
                  </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                  <AccordionItemHeading>
                      <AccordionItemButton>
                        Where is the line between art and not art?
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                      <p>
                        Id aute tempor ad sunt et exercitation nulla duis dolore irure elit consectetur laborum reprehenderit veniam nostrud in duis ut duis ullamco dolore do adipisicing sed proident nostrud aute ut ea cupidatat exercitation sit elit.
                      </p>
                  </AccordionItemPanel>
              </AccordionItem>
          </Accordion>
        </div>
      </div>        
    );
}