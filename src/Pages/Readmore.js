import React,  {Component} from 'react'
import Pic6 from '../img/img7.png'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'


class Readmore extends Component{
    render(){
        return(
            <div>
               <div className='container'>
                   <div className='row'>
                       <div className='col-md-12'>
                       <Image src={Pic6} fluid className='my-5' width='86%'/>
                        <Card className='p-3 mb-5'>
                            <Card.Body>
                            <h5><Card.Title>HOW TO ELIMINATE ODOURS FROM WASTE BINS</Card.Title></h5>
                                <Card.Text>                                 
                                  Every single thing you throw away including leftovers ends up in your garbage bin so it is not unusual that the foul mixture of things you put in there caues it to reek and make your home stink like a dump.Trash smells,but you can reduce the odour from waste bins by following these strategies;
                                  1.	Use proper trash disposal methods.
                                        The first step to reducing the foul smell from your trash is segregating the garbage. If you keep all the household waste in one place, the different odours will mingle and form a uniquely unpleasant smell. Ideally, you should separate your trash into four groups:
                                        •	Waste paper products: This includes things like old files, product packaging, cardboard, and office paper, which can then be taken to a recycling centre
                                        •	Non-biodegradable, recyclable waste: Items such as aluminium cans, plastic bottles, and other non-biodegradable items should also be put together and sent to a recycling facility
                                        •	Biodegradable waste: Leftover food, vegetable peelings, rotting food, and other kitchen waste should never be mixed with other waste. Try turning them into compost for your garden. If you must discard them, drain off as much liquid as you can, put them in a sealable container, such as a plastic grocery bag, and then dump them in the garbage disposal bin as soon as possible
                                        •	Garbage: Everything else can be put here and deposited in the garbage disposal bin
                                        As soon as you empty the trash bins, clean them thoroughly to get rid of any odours and to keep odours from building up.
                                        2.	Make use of odour absorbers.
                                        There are a number of household supplies you can use to absorb the odours in your waste bins.
                                        •	Baking Soda: Sprinkle baking soda all over the trash in the bin, and in the trash bags themselves
                                        •	Cat Litter: Add a sprinkling of cat litter to the waste bin to absorb odours and liquids
                                        •	Dry Coffee Grounds: Put well dried coffee grounds in the bottom of the bin
                                        •	Charcoal: Add charcoal to the bin to help filter the odours
                                        •	Baking Soda with Vinegar and Lemon Juice: Mix baking soda with vinegar and lemon juice to scrub trash cans between trash take-outs
                                        3.	Mask the smell with a stronger odour.
                                        There are a number of things you can use to mask the odour of stinky trash, such as vanilla extract, citrus peels, tea leaves, and coffee grounds. Leave them in the bin overnight to absorb and mask the bad smells from the trash.

                                </Card.Text>
                            </Card.Body>
                        </Card>

                       </div>

                   </div>
                   
                </div>                   
           </div>
        )
    }
}

export default Readmore