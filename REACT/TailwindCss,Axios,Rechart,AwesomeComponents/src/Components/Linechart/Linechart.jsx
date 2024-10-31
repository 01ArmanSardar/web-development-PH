
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import './Linechart.css'
const Linechart = () => {

    const studentMarks = [
        {
            id: 1,
            name: "Alice",
            marks: {
                Physics: 85,
                Math: 90,
                Chemistry: 78
            }
        },
        {
            id: 2,
            name: "Bob",
            marks: {
                Physics: 72,
                Math: 80,
                Chemistry: 65
            }
        },
        {
            id: 3,
            name: "Charlie",
            marks: {
                Physics: 88,
                Math: 95,
                Chemistry: 92
            }
        },
        {
            id: 4,
            name: "David",
            marks: {
                Physics: 60,
                Math: 70,
                Chemistry: 68
            }
        },
        {
            id: 5,
            name: "Ella",
            marks: {
                Physics: 90,
                Math: 85,
                Chemistry: 88
            }
        },
        {
            id: 6,
            name: "Frank",
            marks: {
                Physics: 75,
                Math: 71,
                Chemistry: 80
            }
        },
        {
            id: 7,
            name: "Grace",
            marks: {
                Physics: 92,
                Math: 68,
                Chemistry: 90
            }
        },
        {
            id: 8,
            name: "Henry",
            marks: {
                Physics: 68,
                Math: 45,
                Chemistry: 70
            }
        },
        {
            id: 9,
            name: "Isabella",
            marks: {
                Physics: 45,
                Math: 35,
                Chemistry: 87
            }
        },
        {
            id: 10,
            name: "Jack",
            marks: {
                Physics: 3,
                Math: 78,
                Chemistry: 89
            }
        }
    ];
    return (
        // nicher lineChart tah Responsive korar jonno ami ai link tekeh refrence niechi      https://stackoverflow.com/questions/52134350/set-height-and-width-for-responsive-chart-using-recharts-barchart
        <ResponsiveContainer className="bg-slate-700" minWidth={350} height={350}>
            <LineChart  data={studentMarks}>
                <Line type="monotone" dataKey="marks.Physics" stroke="red" />
                <Line type="monotone" dataKey="marks.Math" stroke="green" />
                <XAxis  dataKey="name" />
                <YAxis />

            </LineChart>
        </ResponsiveContainer>

    );
};

export default Linechart;