import React from "react";
import './about.css'

const about = () => {
    return (
        <>
            <div class="team">
                <h1>Trisofix Team</h1>
                <div class="member">
                    <div>
                        <img src="images/saswat.jpg" alt="member1" />
                    </div>
                    <div class="text">
                        <h3>Member-1</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus voluptatum quos atque aut
                            nulla. Earum inventore voluptatibus eligendi magnam quasi facere iste. Temporibus dolorum sint, vero
                            laboriosam modi quidem. Delectus itaque tempora distinctio possimus fugiat rerum veritatis,
                            molestias minus aspernatur vel totam harum voluptatem porro cum eveniet mollitia ad.</p>
                    </div>
                </div>

                <div class="member memberSaroj">
                    <div class="text">
                        <h3>Member-2</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus pariatur nobis, laboriosam velit
                            sint quod deleniti odio aperiam facere. Rem harum officiis maxime culpa voluptatum voluptas
                            exercitationem odit, illum quos libero dicta alias non quaerat consequatur similique iure,
                            veritatis, optio ex! Culpa rerum ad eos sequi accusamus quam, nulla laudantium!</p>
                    </div>
                    <div>
                        <img class="saroj" src="images/saroj.jpg" alt="member2" />
                    </div>
                </div>


                <div class="member">
                    <div>
                        <img src="images/satya.jpg" alt="member3" />
                    </div>
                    <div class="text">
                        <h3>Member-3</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus pariatur nobis, laboriosam velit
                            sint quod deleniti odio aperiam facere. Rem harum officiis maxime culpa voluptatum voluptas
                            exercitationem odit, illum quos libero dicta alias non quaerat consequatur similique iure,
                            veritatis, optio ex! Culpa rerum ad eos sequi accusamus quam, nulla laudantium!</p>
                    </div>
                </div>
            </div>

            <div class="aboutProject">
                <div class="box">
                    <h1>Trezo</h1>
                    <p>
                        <div><b>Welcome to Trezo — your ultimate fashion destination.</b></div>
                        <div>Trezo is not just an eCommerce platform — it's your personal fashion playground.
                            Discover a world where style meets comfort, and where fashion is reimagined for <b>men, women, and
                                kids</b>
                            alike. From everyday essentials to head-turning party wear, Trezo brings you a handpicked collection of
                            the latest trends, timeless classics, and everything in between. </div>

                        <div> We believe fashion should be fun, fearless, and for everyone. That’s why we offer an effortless
                            shopping
                            experience, secure checkouts, and speedy delivery — all wrapped in one sleek, user-friendly site. </div>

                        <div> Whether you're dressing for work, a wedding, or the weekend, Trezo has you covered — with style, with
                            quality, and with love.
                        </div>
                        <b>Trezo — Dress Bold. Live Beautiful.</b> </p>
                </div>
            </div>
        </>

    )
}

export default about