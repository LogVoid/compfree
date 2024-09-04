import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-100 py-4">
            <div className="border-t border-gray-300 my-4"></div>
            <div className="text-center">
                <p className="text-gray-600 mb-2">
                    © {new Date().getFullYear()} LogVoid.
                </p>
                <p className="text-gray-600 mb-2">
                    This software is licensed under the AGPLv3, which comes with no warranty. For more details, please see the{' '}
                    <a
                        href="https://www.gnu.org/licenses/agpl-3.0.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        AGPLv3 License
                    </a>.
                </p>
                <p className="text-gray-600 mb-2">
                    Licensees may convey this work under the terms of the AGPLv3.
                </p>
                <p className="text-gray-600">
                    The source code is available on{' '}
                    <a 
                        href="https://github.com/LogVoid/compfree" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-500 hover:underline"
                    >
                        GitHub
                    </a>.
                </p>
            </div>
        </footer>
    );
};

export default Footer;

