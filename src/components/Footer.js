import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Film } from 'react-feather'

import { Box, Container, Paragraph, Stack, Set } from 'bumbag'
import LogoSecondary from 'components/LogoSecondary.js'
import Logo from 'components/Logo.js'

const Footer = () => (
	<Box backgroundColor='primary' color='white'>
		<Container padding='2rem 1rem'>
			<Stack>
				<Stack orientation='horizontal' alignItems='flex-start'>
					<Box>
						<Link to='/'>
							<Logo style={{ height: '3rem', width: 'auto', marginRight: '1rem' }} />
							<LogoSecondary style={{ height: '3.3rem', width: 'auto', fill: '#fff' }} />
						</Link>
					</Box>
					<Set orientation='horizontal'>
						<Box use='a' href='https://www.instagram.com/useveracruz/' target='_blank'>
							<Instagram />
						</Box>
						<Box use='a' href='https://www.tiktok.com/@useveracruz' target='_blank'>
							<Film />
						</Box>
					</Set>
				</Stack>

				<Stack orientation='horizontal'>
					<Paragraph fontSize='100' spreadTablet={6} spreadWidescreen={6}>
						Veracruz Vestuário & Companhia Limitada
						<br />
						Conhecereis a verdade e a verdade os libertará.
						<br />
						Jesus é o caminho a verdade e a vida
					</Paragraph>
					<Paragraph fontSize='100' spreadTablet={6} spreadWidescreen={6}>
						Brasília - DF
						<br />
						CNPJ: 38.501.859/0001-57
					</Paragraph>
				</Stack>
			</Stack>
		</Container>
	</Box>
)

export default Footer