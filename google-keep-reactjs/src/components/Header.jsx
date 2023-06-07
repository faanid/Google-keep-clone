import React from "react";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import "../styles/style.css";
import Container from "./Container";
import "tailwindcss/tailwind.css";

function Header(props) {
  const [enabled, setEnabled] = useState(true);
  const logo = (
    <img
      src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
      alt="logo"
    />
  );
  return (
    <div className="header">
      {logo}
      <h3>Keep</h3>
      <Container>
        <Switch.Group as="div" className="flex items-center space-x-4">
          <Switch.Label>Enabled message</Switch.Label>
          <Switch
            as="button"
            checked={enabled}
            onChange={setEnabled}
            className={`${enabled ? "bg-green-400" : "bg-gray-200"} `}
          >
            {({ checked }) => (
              <span
                className={`${
                  checked ? "translate-x-6" : "translate-x-0"
                } inline-bock w- h-5 transition duration-200 ease-in-out transform bg-white rounded-full`}
              />
            )}
          </Switch>
        </Switch.Group>
      </Container>
    </div>
  );
}

export default Header;
