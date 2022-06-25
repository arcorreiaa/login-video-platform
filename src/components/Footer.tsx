import React from "react";

export default function() {
  return(
    <footer className="bg-garay-900 ">
            <div className="md:col-span-4 mt-10  text-center bg-gray-900 ">
                <ul>
                    <li className="inline-block text-xs text-gray-600 mr-4">
                        <a href="#">Legal</a>
                    </li>
                    <li className="inline-block text-xs text-gray-600 mr-4">
                        <a href="#">Centro de privacidade</a>
                    </li>
                    <li className="inline-block text-xs text-gray-600 mr-4">
                        <a href="#">Politica de privacidade</a>
                    </li>
                    <li className="inline-block text-xs text-gray-600 mr-4">
                        <a href="#">Cookies</a>
                    </li>
                    <li className="inline-block text-xs text-gray-600 mr-4">
                        <a href="#">Anuncios</a>
                    </li>
                </ul>
            </div>
            <div className="">
                <p className=" text-center flex text-gray-500 text-xs">&copy; 2022  by Alysson </p>
            </div>
    </footer>
  );
}