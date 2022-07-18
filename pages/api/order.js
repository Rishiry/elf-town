import {Directus} from "@directus/sdk";

export default async function handler(req, res) {

    const query = req.body

    const expectedUserDetails = [
        'email',
        'fname',
        'lname',
        'phone',
        'addr1',
        'addr2',
        'city',
        'state',
        'postalCode',
        'country'
    ]

    const directus = new Directus(process.env.NEXT_PUBLIC_API_URL, {
        auth: {
            staticToken: process.env.STATIC_TOKEN
        }
    });

    if (req.method != 'POST') {
        res
            .status(405)
            .json({error: 'Invalid Method'});

        return;
    }

    if (expectedUserDetails.some(k => query[k] == undefined)) {
        res
            .status(400)
            .json({error: 'Missing Params'})
        return;

    }

    const directus_request = await directus
        .items('orders')
        .createOne({
            first_name: query.fname,
            last_name: query.lname,
            email: query.email,
            phone: query.phone,
            addr_line_1: query.addr1,
            addr_line_2: query.addr2,
            city: query.city,
            state: query.state,
            postal_code: query.postalCode,
            country: query.country
        });

    res
        .status(200)
        .json(query)

}
