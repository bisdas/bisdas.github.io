import React from 'react';
import { OuterWrapper, Bullet, BulletIconWrapper, BulletTextWrapper, BulletIconHyphen, BulletIconCircle, BulletText } from './Bullets.styled';

export default function Bullets({ bullets, icon }) {
    const BulletType = {
        HYPHEN: 'hyphen',
        CIRCLE: 'Circle'
    };

    return (
        <OuterWrapper>
            {
                bullets.map((bullet) => (
                    <Bullet>
                        <BulletIconWrapper>
                            {
                                icon === BulletType.HYPHEN
                                    ? <BulletIconHyphen />
                                    : <BulletIconCircle />
                            }

                        </BulletIconWrapper>
                        <BulletTextWrapper>
                            <BulletText>{bullet}</BulletText>
                        </BulletTextWrapper>
                    </Bullet>
                ))
            }
        </OuterWrapper>
    );
}
