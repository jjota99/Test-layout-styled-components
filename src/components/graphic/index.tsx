import React, {useEffect, useState} from 'react';
import { ResponsiveBar } from '@nivo/bar';
import {api} from "../../services/api";

export const Graphic = () => {
    const [analytics, setAnalytics] = useState([]);
    const keysData = ['hipertensos', 'diabeticos'];
    const keysColor = ['#ea4739', '#38bcb2'];

    useEffect(() => {
        api.get('analytics').then(response => setAnalytics(response.data))
    }, [])

    return (
        <div style={{ height: 400 }}>
            <ResponsiveBar
                data={analytics}
                margin={{top: 30, right: 110, bottom: 80, left: 120}}
                padding={0.2}
                labelSkipHeight={12}
                labelSkipWidth={12}
                groupMode='grouped'
                colors={keysColor}
                keys={keysData}
                indexBy='quadrimestre'
                legends={[{
                    dataFrom: 'keys',
                    anchor: 'bottom',
                    direction: 'row',
                    justify: false,
                    translateX: 0,
                    translateY: 65,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemOpacity: 0.85,
                    symbolSize: 10,
                    toggleSerie: true,
                    symbolShape: 'circle',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemOpacity: 1,
                            },
                        },
                    ],
                }]}
       />
        </div>
    )
}