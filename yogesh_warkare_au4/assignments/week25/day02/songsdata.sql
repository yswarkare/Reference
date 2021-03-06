PGDMP     "    .                x         	   songsdata    12.2    12.2                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    24588 	   songsdata    DATABASE     �   CREATE DATABASE songsdata WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United States.1252' LC_CTYPE = 'English_United States.1252';
    DROP DATABASE songsdata;
                postgres    false            �            1259    24618    singers_table    TABLE       CREATE TABLE public.singers_table (
    song_name text,
    singer_name text NOT NULL,
    singer_age integer,
    singer_awards text[],
    singer_experience_of_singing integer,
    is_singer_classically_trained boolean,
    singer_gender text,
    singer_native_language text
);
 !   DROP TABLE public.singers_table;
       public         heap    postgres    false            �            1259    24589    songs_table    TABLE     �   CREATE TABLE public.songs_table (
    song_name text NOT NULL,
    song_length numeric,
    song_release_year integer,
    song_awards text[],
    song_movie_name text,
    song_genre text,
    song_language text,
    singer_name text
);
    DROP TABLE public.songs_table;
       public         heap    postgres    false                      0    24618    singers_table 
   TABLE DATA           �   COPY public.singers_table (song_name, singer_name, singer_age, singer_awards, singer_experience_of_singing, is_singer_classically_trained, singer_gender, singer_native_language) FROM stdin;
    public          postgres    false    203   3                 0    24589    songs_table 
   TABLE DATA           �   COPY public.songs_table (song_name, song_length, song_release_year, song_awards, song_movie_name, song_genre, song_language, singer_name) FROM stdin;
    public          postgres    false    202   �       �
           2606    24625     singers_table singers_table_pkey 
   CONSTRAINT     g   ALTER TABLE ONLY public.singers_table
    ADD CONSTRAINT singers_table_pkey PRIMARY KEY (singer_name);
 J   ALTER TABLE ONLY public.singers_table DROP CONSTRAINT singers_table_pkey;
       public            postgres    false    203            �
           2606    24596    songs_table songs_table_pkey 
   CONSTRAINT     a   ALTER TABLE ONLY public.songs_table
    ADD CONSTRAINT songs_table_pkey PRIMARY KEY (song_name);
 F   ALTER TABLE ONLY public.songs_table DROP CONSTRAINT songs_table_pkey;
       public            postgres    false    202            �
           2606    24626 *   singers_table singers_table_song_name_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.singers_table
    ADD CONSTRAINT singers_table_song_name_fkey FOREIGN KEY (song_name) REFERENCES public.songs_table(song_name);
 T   ALTER TABLE ONLY public.singers_table DROP CONSTRAINT singers_table_song_name_fkey;
       public          postgres    false    2692    203    202            �
           2606    24631 (   songs_table songs_table_singer_name_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.songs_table
    ADD CONSTRAINT songs_table_singer_name_fkey FOREIGN KEY (singer_name) REFERENCES public.singers_table(singer_name);
 R   ALTER TABLE ONLY public.songs_table DROP CONSTRAINT songs_table_singer_name_fkey;
       public          postgres    false    203    2694    202               C   x��(�+I-�����S�M,�V�M����I��41����K��42�L��M�I�t�K��,������� F<         Z   x��(�+I-�4�36�420�����K��I-���K,�/RpI,�VpK,I�t��.��t�K��,������S�I�&�f��$�q��qqq ��.     