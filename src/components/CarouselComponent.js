import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption, Col } from 'reactstrap';


function CarouselComponent({carouselObjects}) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === carouselObjects.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? carouselObjects.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const items = carouselObjects.map(carouselObject => {
        return (
            <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={carouselObject.image}>
                <img src={carouselObject.image} alt={carouselObject.name} />
                <CarouselCaption captionheader={carouselObject.name} />
            </CarouselItem>
        );
    });

    return (
        <React.Fragment>
            <Col xs="12" >
                <Carousel className="homeCarousel" activeIndex={activeIndex} next={next} previous={previous}>
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                    {items}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                    <CarouselControl direction="next" directionText="next" onClickHandler={next} />
                </Carousel>
            </Col>
        </React.Fragment>
    );
}

export default CarouselComponent;