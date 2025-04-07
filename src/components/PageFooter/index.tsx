import { Logo } from "../Logo";

export const PageFooter = () => {
    return (
        <footer className="w-full h-min p-4 pt-8 pb-22 grid grid-rows-[min-content] grid-cols-[min(100%,96rem)] justify-center bg-blue-950">
            <section className="w-full h-min flex flex-col gap-y-10">
                <section className="w-full h-min flex flex-col gap-y-8 gap-x-10 md:flex-row">
                    <section className="w-full h-min flex flex-col gap-y-8">
                        <Logo markVersion />
                        <section className="w-full h-min flex flex-col gap-y-4">
                            <h5 className="w-full h-min text-amber-400 font-bold text-xl font-quicksand">Contact:</h5>
                            <p className="w-full h-min text-gray-50 font-medium text-sm font-quicksand">
                                256 Avenida Brasil, São Paulo City, Brasil
                                <br />
                                contact_petzzo@hotmail.com
                                <br />
                                +99 (99) 99999-9999
                            </p>
                        </section>
                    </section>
                    <section className="w-full h-min flex flex-col gap-y-8">
                        <h5 className="w-full h-min text-amber-400 font-bold text-xl font-quicksand">Information:</h5>
                        <ul className="w-full h-min flex flex-col gap-y-1">
                            <li>
                                <a
                                    href="/"
                                    className="w-full h-min text-gray-50 font-medium text-sm font-quicksand"
                                >
                                    Terms of Use
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="w-full h-min text-gray-50 font-medium text-sm font-quicksand"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="w-full h-min text-gray-50 font-medium text-sm font-quicksand"
                                >
                                    Terms of Use
                                </a>
                            </li>
                        </ul>
                    </section>
                    <section className="w-full h-min flex flex-col gap-y-8">
                        <h5 className="w-full h-min text-amber-400 font-bold text-xl font-quicksand">Quick Links:</h5>
                        <ul className="w-full h-min flex flex-col gap-y-1">
                            <li>
                                <a
                                    href="/"
                                    className="w-full h-min text-gray-50 font-medium text-sm font-quicksand"
                                >
                                    Animal Rescue
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="w-full h-min text-gray-50 font-medium text-sm font-quicksand"
                                >
                                    Humane Education
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="w-full h-min text-gray-50 font-medium text-sm font-quicksand"
                                >
                                    Animal Hospital
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="w-full h-min text-gray-50 font-medium text-sm font-quicksand"
                                >
                                    Pricing Table
                                </a>
                            </li>
                        </ul>
                    </section>
                    <section className="w-full h-min flex flex-col gap-y-8">
                        <h5 className="w-full h-min text-amber-400 font-bold text-xl font-quicksand">Opening Hours:</h5>
                        <ul className="w-full h-min flex flex-col gap-y-1">
                            <li className="w-full h-min text-gray-50 font-medium text-sm font-quicksand">
                                Monday / 8.00 - 21.00
                            </li>
                            <li className="w-full h-min text-gray-50 font-medium text-sm font-quicksand">
                                Tuesday / 8.00 - 21.00
                            </li>
                            <li className="w-full h-min text-gray-50 font-medium text-sm font-quicksand">
                                Thursday / 8.00 - 21.00
                            </li>
                            <li className="w-full h-min text-gray-50 font-medium text-sm font-quicksand">
                                Friday / 8.00 - 21.00
                            </li>
                            <li className="w-full h-min text-gray-50 font-medium text-sm font-quicksand">
                                Saturday / 8.00 - 21.00
                            </li>
                            <li className="w-full h-min text-gray-50 font-medium text-sm font-quicksand">
                                Sunday / 8.00 - 21.00
                            </li>
                        </ul>
                    </section>
                </section>
                <p className="w-full h-min text-gray-50 font-medium text-sm font-quicksand text-center">
                    Copyright 2025 <span className="text-amber-400">Peyzzo</span>. All Rights Reserved
                </p>
            </section>
        </footer>
    );
};
